const heading = React.createElement("h1",{id:"heading"},"Hello(react)");
        console.log(heading);
        
            <div id ="outer">
                <div id ="inner">
                <p id="para"></p>
                <h1 id = "heading"></h1>
                <sspan id ="message">
                    Hello
                </sspan>
            </div>
        </div>
const Heading = React.createElement("div", { id: "outer" }, [
    React.createElement("div", { id: "inner" }, [
    React.createElement("p", { id: "para" }, "paragraph"),
    React.createElement("h1", { id: "heading" }, "heading"),
    React.createElement("span", { id: "message" }, "learning"),
  ]),

    React.createElement("div", { id: "inner1" }, [
    React.createElement("p", { id: "para" }, "paragraph"),
    React.createElement("h1", { id: "heading" }, "heading"),
    React.createElement("span", { id: "message" }, "learning"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(heading);