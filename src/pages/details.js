import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {BsFillBookmarkFill} from "react-icons/bs";
import Api from "../API/service";
import "./detail.scss";
import {
    convertDate,
    getDayOfWeek,
    getHoursAndMinutes,
    getSessionStorage,
    setSessionStorage
} from "../assets/helpers/helpers";
import SnackbarContext from "../components/snackbar/snackbar-context";
import Snackbar from "../components/snackbar";
import {useDispatch, useSelector} from "react-redux";
import {
    addToBookmark,
    decrementCounter,
    deleteBookmark,
    incrementCounter,
    setCounter
} from "../store/actions/counterActions";


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
        if( getSessionStorage(detail) ){
            setButton("REMOVE")
            setSnackbarMsg(" removed from bookmarks".toUpperCase())
            setSnackbarBg("#D32F2F")
        }
        else{
            setButton("ADD")
            setSnackbarMsg(" saved to bookmarks".toUpperCase())
            setSnackbarBg("#388E3C")
        }

    }, [detail])

    useEffect(()=>{
        fetchNewsData(pathname)
    }, []);


    const addToBookMark = (data) => {
        setSessionStorage(data)

        snackbarCtx.displayMsg(snackbarMsg, snackbarBg);
    }

    return (
        detail ?
        <>
            <h2>The count is: {counter.bookmark}</h2>
            <p>
                <button onClick={() => dispatch(addToBookmark(detail))}>INCREMENT</button>
            </p>

            <p>
                <button onClick={() => dispatch(deleteBookmark(detail))}>DECREMENT</button>
            </p>

            <p>
                <button onClick={() => dispatch(setCounter(5))}>Set to 5!</button>
            </p>
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
                        <p>
                            <strong>  BALI, REQNews </strong> -
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, beatae consequuntur delectus eligendi error facilis illum laboriosam laborum, non nostrum repellat vero. Dolore expedita magni maxime quam similique. Recusandae, vel!
                        </p>
                        <br/>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur cupiditate ea excepturi molestiae. Assumenda eius ex expedita facere fuga neque nihil nobis odio perferendis, praesentium, qui ullam! Consectetur, minima.
                        </p>
                        <br/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur cupiditate dignissimos eos iste necessitatibus nobis nulla recusandae, sequi unde. A aliquam aut culpa delectus, dolores impedit minima quae repudiandae.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi culpa delectus doloribus est excepturi harum hic laboriosam maiores necessitatibus, neque nisi nostrum odio provident quo sit suscipit tempora tenetur?
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus alias animi architecto atque corporis, dolore, eius eveniet ex illum inventore ipsum iste laudantium natus praesentium quaerat ratione sapiente voluptatibus.
                            <br/>
                            <br/>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quis vel? Alias ducimus fugiat numquam odit quia quidem quis ullam? Aliquid aut cupiditate delectus dolores ex perferendis praesentium. Velit, veritatis.
                        </p>
                        <p>
                            &#34;Di tahun 2018 sembuh dan kumat (lagi) 2021,&#34; imbuhnya.
                        </p>
                        <br/>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut culpa cupiditate debitis delectus dolorem eligendi, exercitationem iusto libero magni odio officia perspiciatis quas quia quibusdam reiciendis repudiandae sunt tenetur!
                        </p>
                        <br/>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa itaque libero minima molestias mollitia odio perspiciatis placeat quisquam! Aliquid eos fugit nulla odit possimus qui quia quis similique temporibus veritatis.
                        </p>
                        <br/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus id ipsam magni maxime nam quaerat temporibus ullam ut veniam? Distinctio eos, illo iusto nesciunt nobis rem sint soluta tenetur.
                        </p>
                        <br/>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae blanditiis deleniti, deserunt dolore doloribus earum excepturi explicabo fugiat iure maiores minima nostrum qui sapiente sunt suscipit veniam vero voluptates.
                        </p>
                        <br/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos officiis, quis. Ad adipisci amet commodi eum explicabo illo ipsum nam, nobis optio placeat provident quisquam ratione, sapiente totam voluptas voluptatem?
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est inventore nostrum qui sunt. Aperiam architecto at blanditiis commodi corporis dolore, error, et illo porro quidem ratione repellat vitae voluptas?
                            <br/>
                            <br/>
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ducimus, illo magnam quidem quos similique tenetur! A aliquam culpa debitis eaque eligendi facilis, incidunt laboriosam odit, quia, ratione rem suscipit?
                            <br/>
                            <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam at corporis cumque dolorum eaque earum eius hic, iste itaque, iure porro sit, tempore ut velit! Aperiam nihil repudiandae sed.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="https://via.placeholder.com/728x728.png?text=PLACEHOLDER" alt="Placeholder" width="100%"/>
                    </div>
                </div>
            </div>
        </>
            : <div />
    );
}

export default Details;
