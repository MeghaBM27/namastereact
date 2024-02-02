import React from "react";

class ClassCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: { login: "dummyname ", id: 1233 },
    };
    console.log("constructor")
  }


  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/MeghaBM27");
    // const json = await data.json();
    // this.setState({
    //   userInfo: json,
    // });

    this.timer=setInterval(()=>{
        console.log("setTime intervel")
    },1000)

    console.log("didmount API")
  }

componentDidUpdate(){
    console.log("cocomponentDidUpdatem")  //it will call last
}

componentWillUnmount(){

    clearInterval(this.timer)
    console.log("componentWillUnmount")  //if u go next page it will disable
}

  render() {

    console.log("render")
//debugger
    const { name, location } = this.props;
    const { login, id, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div
        className="component-holder"
        style={{
          border: "2px solid black",
          margin: "30px",
          padding: "30px",
          width: "fit-content",
        }}
      >
        <h1>
          {login}-{id}
        </h1>
        <img src={avatar_url} />
        {/* <h1>count ={this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increment
        </button> */}
        <h1>name :{name}</h1>
        <h2>place: {location}</h2>
        <h3>working: jobLess</h3>
      </div>
    );
  }
}

export default ClassCom;
