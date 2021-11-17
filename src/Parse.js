import React from "react";

class Parse extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}
    handleChange(event) {
        this.setState({value: event.target.value});
    }

   handleSubmit(event) {
        const input = this.state.value;
       const array = input.split(/\r?\n/);
       let temp = "";
       let output = "";
       for (let i = 0; i < array.length; i++) {
           console.log(array[i]);
           temp = array[i].replace(/\D/g, '');
           console.log(temp);
           if (temp.length > 0) {
               if (i === array.length - 1) {
                    output += temp;
               }else {
                    output += temp;
                    output += ", ";
                    console.log("x");
               }
           }
       }
       console.log(output);
       this.setState({value: output});
      event.preventDefault();
    }

  render() {
      return (
          <div id="form">
            <form onSubmit={this.handleSubmit} className="mb-3">
              <label>
                <div><textarea
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    rows={5}
                    cols={40}
                />
                </div></label>
              <div><input class="button1" type="submit" value="convert" /></div>
            </form>
          </div>
      );
    }
  }

export default Parse;
