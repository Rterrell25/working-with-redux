import React, { Component } from "react";
import * as actionCreators from "../../store/actions/actions";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={this.props.counterChangedHandler}
        />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.counterMinusHandler}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(result => (
            <li
              onClick={() => this.props.onDeleteResult(result.id)}
              key={result.id}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    counterChangedHandler: () => dispatch(actionCreators.add_counter(5)),
    counterMinusHandler: () => dispatch(actionCreators.minus_counter(5)),
    onStoreResult: result => dispatch(actionCreators.store_result(result)),
    onDeleteResult: id => dispatch(actionCreators.delete_result(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
