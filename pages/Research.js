import React from "react";
import NavBar from "../components/NavBar";

function Research() {
    return (
        <div>
            <NavBar />
            <div className="research-cont">
                <div className="research">
                    <div className="p-10">
                        <p className="font-medium text-3xl my-10">Introduction</p>

                        <p className="">
                            The world has forced people to stay indoors since COVID-19. Staying indoors has caused many problems
                            such as loneliness and inactivity. People have had to endure this until now. Many of us have noticed
                            the importance of social ties and physical activity. But many others are not so lucky. Some people
                            have had a harder time exercising and staying connected.
                            <br />
                            <br />
                            Loneliness and inactivity can have many more long-term repercussions. Both can cause mental health
                            issues and physical health problems. The problem of loneliness and inactivity matters because no one
                            wants to be unhealthy. No one wants their friend to be alone or sick. It is not ok to be a recluse and
                            in ill health. Being together, socializing, and moving can be a definition of what it means to be
                            alive.
                            <br />
                            <br />
                            We are proposing making an application that fixes both of these problems. We are planning to design an
                            app that connects people via workout interests so that they may exercise together. We surveyed our
                            potential users and learned that they exercise alone. With our application, we would be helping our
                            potential users to exercise with other people rather than by themselves.
                            <br />
                            <br />
                            Our design will make it easier to meet people with like-minded exercise interests. The impact of our
                            application will make people less lonely and more active. Our application will help mitigate the
                            problems that arose from COVID-19.
                        </p>
                    </div>
                    <div className="p-10">
                        <p className="font-medium text-3xl my-10">Design Research</p>

                        <div className="">
                            For our design research we sought out friends, family and close acquaintances and had them fill out a
                            survey. In terms of data we wanted to get we wanted both quantitative and qualitative data.
                            Quantitative data such as if people prefer working out alone or with people, if people use workout
                            apps and such. Our qualitative data would include something like having the participant describe what
                            their ideal workout app would be.
                            <br />
                            <br />
                            <div className="research-info">
                                Another reason for using the survey is because we can easily organize our data with it, and we can
                                get the information we want. In terms of participation, we managed to get 13 responsedants. We
                                distributed the survey through messaging, email and asking people in real life and giving them the
                                Google survey link to them to fill out on their own time. In general of the demographic of our
                                survey, we have 53% respondents at the age of 19-22, with the other 47% being older than that. We
                                have 69.2% males and 30.8% females.
                                <img src="/age.png" alt="funny animation GIF" className="demo-info-img" width="500vw" />
                            </div>
                            <br />
                            <br />
                            <div className="research-info">
                                <img src="/life.png" alt="funny animation GIF" className="demo-info-img" width="500px" />
                                For our findings, we learned from our survey that about 70% of the respondents could be living a
                                much more healthier and active lifestyle. This number tells us how Covid and being in the pandemic
                                has affected the lifestyle of the people. Not being able to go out and not having something to
                                guide people to help them to motivate and workout has become one of the reasons why people are
                                wanting to have a more active lifestyle. Responses like “Engaging with other people that are also
                                active” and “motivation or fun options” helps us understand what the main goal of our app should
                                be.
                            </div>
                            <br />
                            <br />
                            We also found various preferences of our respondents. For example 54% of the respondents prefer to
                            work out alone and 31% prefer to workout with a partner. This tells us that our app should be more
                            individual focused, having features such as being able to track ones workout and diet. This also
                            connects us to another response where 85% of the respondents thought it is helpful to keep a track of
                            your workout.
                            <br />
                            <br />
                            <div className="research-info">
                                <img src="/track.png" alt="funny animation GIF" className="demo-info-img" width="500px" />
                                <img src="/life.png" alt="funny animation GIF" className="demo-info-img" width="500px" />
                            </div>
                            <br />
                            <br />
                            <div className="research-info">
                                Lastly we can also get an idea of what kind of features our users would like to have from the
                                responses of the survey. Responses such as “something that could tell you what kind of workout to
                                focus on depending on what your health goal is” and “Help me keep track of macros”, tells us that
                                our App definitely needs features like a workout and diet tracker as mentioned above. In addition
                                to that we are also planning to give out a reminder every day which will encourage the user to
                                complete a certain task as a part of his/her workout. The user can also confirm the workout
                                through the reminder if he/she worked out or not so that the app can keep a better track of their
                                workout.
                                <img src="/ideal.png" alt="funny animation GIF" className="demo-info-img" width="500px" />
                            </div>
                            <br />
                            <br />
                            <div className="research-info">
                                <img src="/miro.png" alt="funny animation GIF" className="demo-info-img" width="600px" />
                                After gathering this data using Google forms we would organize it on a Miro Board and discuss it
                                with each other to find any patterns or things of interest. We would also use the data Google
                                Forms gave us to give us a general quantitative idea of our data, such as what percent of
                                participants prefers to workout alone, or what percent of participants would like fitness
                                trainers.
                            </div>
                            <br />
                            <br />
                            <p className="font-medium text-3xl my-10">Heuristics and Usability test data</p>
                            After developing a prototype using the data we would then send it to some users to test it. We would
                            ask the user to record themselves using our website to see how they interact with the prototype. With
                            the recording we would find areas which the user struggled with in our prototype in hopes of improving
                            it.
                            <div className="research-info">
                                We found out that a lot of normal functionality users would expect such as being able to use the
                                text field when trying to sign in or sign up. They also seem to like to click a lot of buttons to
                                test if anything would work when they don’t get the results they expect. Users could also get
                                stuck in some pages without anywhere to go back to the home pages without relying on external
                                buttons. Getting stuck like this had some testers not able to proceed with the other tasks
                                essentially soft locking them. There are also plenty of pages where the user would expect text or
                                some places to be clickable, such as profile icon.
                                <img src="/resp.png" alt="funny animation GIF" className="demo-info-img" width="300px" />
                            </div>
                            <div className="research-info">
                                <img src="/chat1.png" alt="funny animation GIF" className="demo-info-img" width="300px" />
                                From what we learned in these tests our prototype has a lot of places where users can get stuck
                                without any way to navigate back. Users also expect lots of things to be able to be clicked on,
                                which we do not have. We also realize that there was no way to chat between the users despite
                                being one of that main feature of the App.
                            </div>
                            <br />
                            <br />
                            The general feedback of participants is that they got stuck on some pages without knowing what to do
                            next a lot of times, requiring a lot of external help. Before there was also no way to perform the
                            sign in tasks because there was no way to access the page. So changes we made was to set the sign up
                            page to the homepage of the prototype. We also need to make a logout page so we can access back the
                            sign up pages. We think the general takeaway here is that the prototype is really early and needs a
                            lot of work, and a lot more methods of navigation to other pages.
                        </div>
                    </div>

                    <div className="p-10">
                        <p className="font-medium text-3xl my-10">Future Design Potential</p>

                        <p className="mb-10">
                            In terms of future design potential we can expand on the flow of the app. We should have more ways for
                            users to get back to specific pages in our app. We can also provide more customizability in terms of
                            themes and background for the user, so they can customize the app to the look they want. Some things
                            to avoid in the future is creating prototypes with deadlock states, which prevents users from
                            navigating back to any of the pages. So all pages and places our app leads to should flow back to
                            another state. Another thing about designing is that you should make anything that users expect to be
                            able to click on interactable. Don’t give users text boxes or buttons that don’t do anything otherwise
                            users will think the app is unresponsive, or get confused wondering why the buttons don’t work. That
                            would what we would do in the future from what we have learned from designing our fitness app.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Research;
