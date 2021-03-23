import React, { Component } from 'react'

export default class Copy extends Component {
    myInput = React.createRef();

    copy = () => {
        this.myInput.current.select();
        document.execCommand('copy');
        document.execCommand('delete');
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                <textarea className="textarea" name="textarea" rows="4" cols="50" ref={this.myInput}></textarea>
                <button onClick={this.copy}>copy</button>
            </div>
        )
    }
}





// import React, { Component } from 'react'

// export default class Copy extends Component {
//     state = { val: '' }

//     c = (e) => {
//         console.log(e.target.value);
//         this.setState({ val: e.target.value })
//     }

//     copy = ()=>{
//         console.log(this.state.val);
//     }
//     render() {
//         return (
//             <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
//                 <textarea className="textarea" name="textarea" rows="4" cols="50" onChange={this.c}></textarea>
//                 <button onClick={this.copy}>copy</button>
//             </div>
//         )
//     }
// }
