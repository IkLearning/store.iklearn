import React from 'react'
import { connect } from 'react-redux'
import PostSingle from '../components/post/PostSingle'
import PostCreate from '../components/post//PostCreate'
import PostList from '../components/post/PostList'
import { Switch, Route} from 'react-router-dom'
import * as actions from '../actions/product'

class PostContainer extends React.Component{

    render(){

        return ( 
            <Switch>
                <Route exact path='/' component={PostList} />
                <Route path='/:category/:slug' component={PostSingle} />
                <Route path='/new-product' component={PostCreate} />
            </Switch>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
    isLoaded: state.isLoaded
})

const mapDispatchToProps = actions

export default connect(mapStateToProps, mapDispatchToProps)(PostList)