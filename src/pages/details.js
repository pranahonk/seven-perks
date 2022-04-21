import React, {useContext, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {BsFillBookmarkFill} from "react-icons/bs";
import Api from "../API/service";
import "./detail.scss";
import {convertDate, getDayOfWeek, getHoursAndMinutes, setSessionStorage} from "../assets/helpers/helpers";
import SnackbarContext from "../components/snackbar/snackbar-context";
import Snackbar from "../components/snackbar";
import Body from "../components/body/body";
import {useDispatch, useSelector} from "react-redux";
import {addToBookmark, deleteBookmark} from "../store/actions/counterActions";
import Spinner from "../components/spinner";


function Details(props) {
    const api = new Api;
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);


    const [detail, setDetail] = useState("");
    const [button, setButton] = useState("");
    const [snackbarMsg, setSnackbarMsg] = useState("");
    const [snackbarBg, setSnackbarBg] = useState("");
    let { pathname } = useLocation();

    const snackbarCtx = useContext(SnackbarContext);

    const fetchNewsData = (path) => {
        api.getDetailNews(path)
            .then((res)=>{
                setDetail(res.data.response.content);
            })
            .catch((err) => console.log(err));
    }

    useEffect(()=>{
        if( counter.bookmark.findIndex(element => element.id === detail.id) > -1 ){
            setButton("REMOVE")
            setSnackbarMsg(" removed from bookmarks".toUpperCase())
            setSnackbarBg("#D32F2F")
        }
        else{
            setButton("ADD")
            setSnackbarMsg(" saved to bookmarks".toUpperCase())
            setSnackbarBg("#388E3C")
        }

    }, [detail, counter])

    useEffect(()=>{
        fetchNewsData(pathname.replace("/bookmark", ""))
    }, []);


    const addToBookMark = (data) => {
        const search =  counter.bookmark.findIndex(element => element.id === data.id);
        if( search === -1 ){
            dispatch(addToBookmark(data))

        }else{
            dispatch(deleteBookmark(search))
        }

        setSessionStorage(data)
        snackbarCtx.displayMsg(snackbarMsg, snackbarBg);
    }

    return (
        detail ?
        <>
            <div className="container">
                {snackbarCtx.isDisplayed && <Snackbar />}
                <div className="row">
                    <div className="col-8">
                        <div className="mt-5">
                            <button className="btn-bookmark" onClick={()=> addToBookMark(detail)} style={{cursor: "pointer"}}>
                                <BsFillBookmarkFill color="white" /> &nbsp;&nbsp; {button} BOOKMARK
                            </button>
                        </div>
                        <div className="mt-3">
                            {
                                getDayOfWeek(detail.webPublicationDate)
                            }
                            {
                                convertDate(detail.webPublicationDate)
                            }
                            {
                                getHoursAndMinutes(detail.webPublicationDate)
                            }
                            &nbsp;BST
                        </div>
                        <div className="mt-3 detail-title">
                            {
                                detail?.webTitle
                            }
                        </div>
                        <div className="mt-3 sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto atque aut cum cumque debitis ducimus eos explicabo, in ipsa minima numquam obcaecati pariatur rem sequi tempore vitae voluptate voluptatibus!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim incidunt magni maxime sit! Amet, cum ducimus fuga, id modi molestiae obcaecati omnis pariatur, placeat praesentium provident quibusdam quidem rerum sit.
                        </div>
                        <div className=" mt-3 line-spacing" />
                    </div>
                    <div className="col-4" />
                    <div className="col-8">
                        <Body />

                    </div>
                    <div className="col-4">
                        <img src="https://via.placeholder.com/728x728.png?text=PLACEHOLDER" alt="Placeholder" width="100%"/>
                    </div>
                </div>
            </div>
        </>
            : <Spinner />
    );
}

export default Details;
