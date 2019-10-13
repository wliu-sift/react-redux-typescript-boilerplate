import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { ScoredTextModel } from 'app/models/ScoredTextModel';

export namespace TextItem {
  export interface Props {
    scoredText: ScoredTextModel;
  }

  export interface State {
  }
}

export class TextItem extends React.Component<TextItem.Props, TextItem.State> {
  constructor(props: TextItem.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { scoredText } = this.props;
    let  element = (
        <div className={style.view}>
          <label>{scoredText.score}</label>
          <textarea>{scoredText.text}</textarea>
        </div>
      );

    // TODO: compose
    const classes = classNames({
      [style.normal]: true
    });

    return <li className={classes}>{element}</li>;
  }
}
