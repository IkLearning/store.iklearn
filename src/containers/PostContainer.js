import React from 'react'
import PostSingle from '../components/post/PostSingle'
import PostCreate from '../components/post//PostCreate'
import PostList from '../components/post/PostList'
import { Switch, Route} from 'react-router-dom'


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

export default PostContainer