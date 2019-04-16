import React from 'react';

class CenterContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            wt: 0,
            ht: 0,
            bmi:0
        }
        this.wtUpdate = this.wtUpdate.bind(this);
    }

    wtUpdate = (event) => {
        this.setState(
            {
                wt: event.target.value
            }
        );
    }

    htUpdate = (event) => {
        this.setState({
            ht : event.target.value
        }
        );
    }

    clickedBMI = () => {
        console.log("clicked");
        console.log(this.state.ht);
        console.log(this.state.wt);

        this.setState(
            {
                bmi : this.state.wt /(this.state.ht * this.state.ht)
            }
        );

        console.log(this.state.bmi);
    }

    render() {
        return (
            <div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Weight</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" onChange={this.wtUpdate} aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Height</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" onChange={this.htUpdate} aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                        <button type="button" class="btn btn-primary" onClick={this.clickedBMI}>Calculate BMI</button>

                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        );
    }
}

export default CenterContent;