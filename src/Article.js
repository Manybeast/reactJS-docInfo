import React, {Component} from "react";
import CommentList from "./CommentList";


export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            commentsShown: false
        }
    }

	render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        const {commentsShown} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
                <button onClick={this.toggleComments}>
                    {commentsShown ? 'Hide comments' : 'Show Comments'}
                </button>
                {this.showComments()}
            </div>
        )
	}

	getBody() {
        if(!this.state.isOpen) return null;
        const {article} = this.props;
        return <section>{article.text}</section>
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    showComments() {
        if(!this.state.commentsShown) return null;
        const {article} = this.props;
        return <CommentList comments = {article.comments} />
    }

    toggleComments = () => {
        this.setState({
            commentsShown: !this.state.commentsShown
        })
    }
}