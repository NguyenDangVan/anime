import React from "react";
import { Link } from "react-router-dom";
import "../../assets/stream_video.scss";

class StreamVideo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      original_title: "",
      image: "",
      movie_type: "",
      content: "",
      status: "upcoming"
    };
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper_video">
          <div className="media_video">
            <iframe src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    width="100%"
            />
          </div>
          <div className="episodes">
            <div className="title-episode"><p>Episodes</p></div>
            <div className="items-episode">
              <button className="btn btn-secondary"><span>1</span></button>
              <button className="btn btn-secondary"><span>2</span></button>
              <button className="btn btn-secondary"><span>3</span></button>
              <button className="btn btn-secondary"><span>4</span></button>
              <button className="btn btn-secondary"><span>5</span></button>
              <button className="btn btn-secondary"><span>6</span></button>
              <button className="btn btn-secondary"><span>7</span></button>
              <button className="btn btn-secondary"><span>8</span></button>
              <button className="btn btn-secondary"><span>9</span></button>
              <button className="btn btn-secondary"><span>10</span></button>
              <button className="btn btn-secondary"><span>11</span></button>
              <button className="btn btn-secondary"><span>12</span></button>
              <button className="btn btn-secondary"><span>13</span></button>
              <button className="btn btn-secondary"><span>14</span></button>
              <button className="btn btn-secondary"><span>15</span></button>
              <button className="btn btn-secondary"><span>16</span></button>
              <button className="btn btn-secondary"><span>17</span></button>
              <button className="btn btn-secondary"><span>18</span></button>
              <button className="btn btn-secondary"><span>19</span></button>
              <button className="btn btn-secondary"><span>20</span></button>
              <button className="btn btn-secondary"><span>21</span></button>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="title-comment">Comment</div>
        </div>
        <div className="suggestion">
          <div className="title-suggestion">Suggestions</div>
        </div>
      </div>
    )
  }
}

export default StreamVideo;
