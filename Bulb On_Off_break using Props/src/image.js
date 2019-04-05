import React from "react"

class Image extends React.Component {
    render(){
        return(
            <div>
                <img height="150" width="100" alt="" src={this.props.imgURL} />
            </div>
        )
    }
}

export default Image