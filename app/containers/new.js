import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import New from '../components/new';
import { publishArticle } from '../actions';

class PublishArticleContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUpdate(nextProps, nextState) {
        const { post } = nextProps;
        if (post) {
            browserHistory.push(`/${post.id}.html`);
        }
    }

    render() {
        const { handleSubmit, cates } = this.props;
        return (
            <div className="col-md-12">
                <New onSubmit={handleSubmit}
                    cates={cates}
                    />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cates: state.cates.cates,
    post: state.publishedArticle.article,
});

const mapDispatchToProps = dispatch => ({
    handleSubmit: values => dispatch(publishArticle(values)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PublishArticleContainer);

