import * as React from 'react';
import RecipePreview from '../../models/RecipePreview';
import './styles.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: RecipePreview;
}

/**
 * A single recipe list item.
 */
export default class RecipeListItem extends React.Component<Props> {
  render() {
    let { props } = this;
    let { data } = props;

    let restProps = {
      ...props
    }
    delete restProps.data;

    return (
      <div className="recipe-list-item" {...restProps}>
        <div className="cover-img" role="img" style={{
          backgroundImage: `url(${data.imageUrl})`
        }}>
        </div>

        <h3 className="name">{data.name}</h3>
      </div>
    )
  }
}