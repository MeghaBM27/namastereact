//  const head =React.createElement("h1",{id:"heading"},"hello react!!")
//         console.log(head)
//         const rootName =  ReactDOM.createRoot(document.getElementById("root"))
//         rootName.render(head)

/*  if u want to make nested like 
<div id="parent">
<div id="child">
<h1>"im an h1 tag"</h1>[incase if we have more siblings like below]
<h4>im an h4 tag</h4>
<h5>im an h5 tag</h5>
</div>
[incase if we have more childer like below we use array]
<div id="child2">
<h1>"im an h1 tag"</h1>
<h4>im an h4 tag</h4>
<h5>im an h5 tag</h5>
</div>
</div>
*/


const parent =React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"im an h1 tag"),
React.createElement("h4",{},"im an h4 tag"),
React.createElement("h5",{},"im an h5 tag")
]
),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"im an h1 tag"),
React.createElement("h4",{},"im an h4 tag"),
React.createElement("h5",{},"im an h5 tag")
]
)]
)
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
