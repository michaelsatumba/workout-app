import NavBar from "../components/NavBar";
export default function Home() {
    return (
        <div>
            <NavBar />
            <div className="figma">
                <iframe
                    width="500"
                    height="850"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FntnAKy4CJbuNgybXEhpzGj%2FClass-Activity-1%253A-Wireframing-and-Protoyping%3Fnode-id%3D133%253A192%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D133%253A192"
                ></iframe>
            </div>
            <div className="flex items-center justify-evenly demo-cont">
                <img src="/Demo.gif" alt="funny animation GIF" className="demo" width="15%" />

                <div className="demo-info">
                    <div className="demo-info-cont">
                        <div className="demo-info-wrap">
                            <h1 className="font-black text-3xl my-5">Feed Page</h1>
                            <p className="font-black text-1xl pr-16">
                                The feed page will be the first page the user will see whenever they open the application. This page
                                contains a feed of all the people and pages that the user follows. These feeds may include images of
                                personal records, workout tips, gym session information, etc. There is also a description at the
                                bottom of the image along with a link to the profile of the person who posted the image. Users can
                                scroll to view more posts.
                            </p>
                        </div>
                        <img src="/Feed.png" alt="funny animation GIF" className="demo-info-img" width="27%" />
                    </div>

                    <div className="demo-info-cont">
                        <div className="demo-info-wrap">
                            <h1 className="font-black text-3xl my-5">Calendar Page</h1>
                            <p className="font-black text-1xl pr-16">
                                Users want an easy and simple way to keep track of the exercises they’ve done. Users can choose and
                                record a type of exercise they have done on a particular day. They can also mark on the calendar
                                to keep track of the days they missed to workout.
                            </p>
                        </div>
                        <img src="/Calender.png" alt="funny animation GIF" className="demo-info-img" width="27%" />
                    </div>

                    <div className="demo-info-cont">
                        <div className="demo-info-wrap">
                            <h1 className="font-black text-3xl my-5">Discover Page</h1>
                            <p className="font-black text-1xl pr-16">
                                The discovery page will be used by users to find new workouts, diet plans, and nearby gyms classes
                                and sessions. This page will be adjusted according to the preference of the user. For example, when 
                                a user is a beginner, this page will show more simple and beginner friendly workouts, classes,
                                and diet plans than a user who is more experianced.
                            </p>
                        </div>
                        <img src="/Discover.png" alt="funny animation GIF" className="demo-info-img" width="27%" />
                    </div>

                    <div className="demo-info-cont">
                        <div className="demo-info-wrap">
                            <h1 className="font-black text-3xl my-5">Chat Page</h1>
                            <p className="font-black text-1xl pr-16">
                                The chat page is simple and minimalist while displaying all the friends of the user. The user can
                                interact with a profile tile to chat with that person. Furthermore at the bottom of the profile,
                                there will be an indication which will show the user whether the person is available for a gym
                                session. This way any user can set a preference that they are free to workout with a partner on a
                                particular day
                            </p>
                        </div>
                        <img src="/Chat.png" alt="funny animation GIF" className="demo-info-img" width="27%" />
                    </div>
                </div>
            </div>
        </div>
    );
}
