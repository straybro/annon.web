
import React, { Component } from 'react';
import classnames from 'classnames';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

import styles from './styles.scss';

class Textarea extends Component {
  state = {
    focused: false,
  }

  focusTextarea() {
    this.setState({
      focused: true,
    });
  }

  blurTextarea() {
    this.setState({
      focused: false,
    });
  }

  render() {
    const {
      rows,
      labelText,
      disabled,
      required,
      defaultValue,
      error,
    } = this.props;

    const { focused } = this.state;

    const textareaClasses = classnames(
      styles.textarea,
      disabled ? styles['textarea--disabled'] : null,
      error ? styles['textarea--errored'] : null,
      focused ? styles['textarea--focused'] : null,
    );

    return (<span>
      <label className={styles['label-wrapper']}>
        <div className={styles['label-text']}>
          { labelText }
        </div>
        <span className={styles['group-textarea']}>
          <textarea
            rows={rows}
            disabled={disabled}
            className={textareaClasses}
            defaultValue={defaultValue}
            onBlur={() => this.blurTextarea()}
            onFocus={() => this.focusTextarea()}
          />
          { error ?
            <div className={styles['error-label']}>
              {error}
            </div> : null
          }
          { required ?
            <div
              className={classnames([
                styles['required-label'],
                focused ? styles['required-label--focused'] : null,
                error ? styles['required-label--error'] : null,
              ])}
            /> : null
          }
        </span>
      </label>
    </span>);
  }
}

export default withStyles(styles)(Textarea);
