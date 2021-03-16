import React from 'react';

const colors = ['#6c5ce7', '#fd79a8', '#d63031', '#ffeaa7', '#55efc4']


class ChangingBox extends React.Component {
    state = { color : 0, shape : '' };

    componentDidMount() {
        setInterval(() => {
            // circle
            if (this.state.color === 4) {
                this.setState({
                    color: (this.state.color = 0), borderRadius: this.state.shape = '50%',
                })
            }
            else {
                this.setState({
                    color: (this.state.color + 1), borderRadius: this.state.shape = '0%',
                })
            }
        }, 500);
    }

    render() {
        return (
            <div style=
                {{
                    backgroundColor: colors[this.state.color],
                    height: '100px',
                    width: '100px',
                    borderRadius : this.state.shape
                }}>

            </div>
        )
    };
};
export default ChangingBox
