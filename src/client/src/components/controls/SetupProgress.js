const React = require("react");

const STEPS = 3;

class SetupProgress extends React.Component {
  render() {
    const { step } = this.props;
    const percentage = (100.0 * step) / STEPS;
    const complete = `${percentage}%`;
    return (
      <div>
        <p className="text-center text-muted">
          Step {step} of {STEPS}
        </p>
        <div className="progress">
          <div
            className="progress-bar gradient-primary"
            style={{ width: complete }}
          />
        </div>
      </div>
    );
  }
}

module.exports = SetupProgress;
