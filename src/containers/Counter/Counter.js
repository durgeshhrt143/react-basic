import React, { Component } from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/action";
class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrement} />
        <CounterControl label="Decrement" clicked={this.props.onDecrement} />
        <CounterControl label="Add 5" clicked={this.props.onIncrementAdd} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onDecrementSubstraction}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store result
        </button>
        <ul>
          {this.props.storeResult.map((r) => (
            <li key={r.id} onClick={() => this.props.onDeleteResult(r.id)}>
              {r.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.count,
    storeResult: state.res.result,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
    onIncrementAdd: () =>
      dispatch({ type: actionTypes.INCREMENT_ADD, value: 5 }),
    onDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
    onDecrementSubstraction: () =>
      dispatch({ type: actionTypes.DECREMENT_SUBSTRATION, value: 5 }),
    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, deleteResultId: id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
