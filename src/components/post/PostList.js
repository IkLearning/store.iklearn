import React from 'react'
import PostListPlaceHolder from './PostListPlaceHolder'
import PostListItem from './PostListItem'

class PostList extends React.Component{

    componentDidMount = () => this.props.fetchProducts()

    getByCat = (id) => () => this.props.fetchProductsByCategory(id)

    renderItem = (i) => {
        let items = [...this.props.products]
        return <PostListItem key={items[i]._id} value={items[i]} getByCat={this.getByCat}/>
    }


    render(){
        let { isLoaded, items } = {...this.state}
        return(
            <div className="posts">
                <div className="posts__head">
                    <div className="posts__topic">Product</div>
                    <div className="posts__category">Category</div>
                    <div className="posts__views">Cart</div>
                    <div className="posts__views">Views</div>
                    <div className="posts__views">Price</div>
                    <div className="posts__activity">Activity</div>
                </div>
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}} /> }
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}} /> }
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}} /> }
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}} /> }
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}} /> }
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}} /> }
                {isLoaded &&
                    items.map((item, i) => this.renderItem(i))
                }
            </div>
        )
    }
}

export default PostList