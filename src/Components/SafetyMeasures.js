import React from "react";
import { Carousel } from "antd";
class SafetyMeasures extends React.Component {
  render() {
    return (
      <div id="safetyMeasures">
        <Carousel autoplay>
          <div>
            <h1>DO THE FIVE Help stop coronavirus</h1>
          </div>
          <div>
            <h2>HANDS Wash them often</h2>
          </div>
          <div>
            <h2>ELBOW Cough into it</h2>
          </div>
          <div>
            <h2>FACE Don't touch it</h2>
          </div>

          <div>
            <h2>SPACE Keep safe distance</h2>
          </div>

          <div>
            <h2>HOME Stay if you can</h2>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default SafetyMeasures;
// ReactDOM.render(<SiderDemo />, mountNode);
