import React from 'react';
import './MemeGenerator.css';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MemeGenerator = /** @class */ (function (_super) {
    __extends(MemeGenerator, _super);
    function MemeGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        };
        _this.handleChangeTop = function (event) {
            _this.setState({ topText: event.target.value });
        };
        _this.handleChangeBot = function (event) {
            _this.setState({ bottomText: event.target.value });
        };
        _this.handleSubmit = function (event) {
            event.preventDefault();
            var randNum = Math.floor(Math.random() * _this.state.allMemeImgs.length);
            var randMemeImg = _this.state.allMemeImgs[randNum].url;
            _this.setState({ randomImg: randMemeImg });
        };
        return _this;
    }
    MemeGenerator.prototype.componentDidMount = function () {
        var _this = this;
        fetch("https://api.imgflip.com/get_memes")
            .then(function (response) { return response.json(); })
            .then(function (response) {
            var memes = response.data.memes;
            _this.setState({ allMemeImgs: memes });
        });
    };
    MemeGenerator.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("form", { className: "meme-form" },
                React.createElement("input", { name: 'topText', type: 'text', placeholder: 'Top Text', value: this.state.topText, onChange: function (e) { return _this.handleChangeTop(e); } }),
                React.createElement("input", { name: 'bottomText', type: 'text', placeholder: 'Bottom Text', value: this.state.bottomText, onChange: function (e) { return _this.handleChangeBot(e); } }),
                React.createElement("button", { onClick: this.handleSubmit }, "Gen")),
            React.createElement("div", { className: "meme" },
                React.createElement("img", { src: this.state.randomImg, alt: "" }),
                React.createElement("h2", { className: "top" }, this.state.topText),
                React.createElement("h2", { className: "bottom" }, this.state.bottomText))));
    };
    return MemeGenerator;
}(React.Component));
export default MemeGenerator;
//# sourceMappingURL=MemeGenerator.js.map