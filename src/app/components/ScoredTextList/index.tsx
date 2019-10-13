import * as React from 'react';
import * as style from './style.css';
import { TextItem } from '../TextItem';
import { ScoredTextModel } from 'app/models/ScoredTextModel';

export namespace ScoredTextList {
  export interface Props {
    items: ScoredTextModel[];
  }
}

export class ScoredTextList extends React.Component<ScoredTextList.Props> {
  render() {
    const { items } = this.props;
    return (
      <section className={style.main}>
        <ul className={style.normal}>
          {items.map((item) => (
            <TextItem
              key={item.id}
              scoredText = {item}
            />
          ))}
        </ul>
      </section>
    );
  }
}
