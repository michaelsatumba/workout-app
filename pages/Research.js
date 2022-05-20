import React from "react";
import NavBar from "../components/NavBar";

function Research() {
    return (
        <div>
            <NavBar />

            <div className="research">
                <div className="p-10">
                    <p className="font-medium text-3xl my-10">Design Research</p>

                    <p className="">
                        For our design research we sought out friends, family and close acquaintances and had them fill out a
                        survey. In terms of data we wanted to get we wanted both quantitative and qualitative data. Quantitative
                        data such as if people prefer working out alone or with people, if people use workout apps and such. Our
                        qualitative data would include something like having the participant describe what their ideal workout app
                        would be. After gathering this data using Google forms we would organize it on a Miro Board and discuss it
                        with each other to find any patterns or things of interest. We would also use the data Google Forms gave
                        us to give us a general quantitative idea of our data, such as what percent of participants prefers to
                        workout alone, or what percent of participants would like fitness trainers. After developing a prototype
                        using the data we would then send it to some users to test it. We would ask the user to record themselves
                        using our website to see how they interact with the prototype. With the recording we would find areas
                        which the user struggled with in our prototype in hopes of improving it.
                    </p>
                </div>

                <div className="p-10">
                    <p className="font-medium text-3xl my-10">Future Design Potential</p>

                    <p>
                        In terms of future design potential we can expand on the flow of the app. We should have more ways for
                        users to get back to specific pages in our app. We can also provide more customizability in terms of
                        themes and background for the user, so they can customize the app to the look they want. Some things to
                        avoid in the future is creating prototypes with deadlock states, which prevents users from navigating back
                        to any of the pages. So all pages and places our app leads to should flow back to another state. Another
                        thing about designing is that you should make anything that users expect to be able to click on
                        interactable. Don’t give users text boxes or buttons that don’t do anything otherwise users will think the
                        app is unresponsive, or get confused wondering why the buttons don’t work. That would what we would do in
                        the future from what we have learned from designing our fitness app.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Research;
