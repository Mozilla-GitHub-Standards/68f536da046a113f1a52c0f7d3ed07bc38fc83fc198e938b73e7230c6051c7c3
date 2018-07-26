import React from 'react';
import reactGA from 'react-ga';
import MozillaFooter from '../components/mozilla/footer.js';
import Nav from '../components/nav.js';
import SingleForm from '../components/single-form.js';
import { FormattedHTMLMessage } from 'react-intl';

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      aboutCopy: null
    };
  },
  componentDidMount: function() {
    var additionalInfoId = 'additional_info_internet_health';
    if (/^(en)(\b|$)/.test(this.context.intl.locale)) {
      additionalInfoId = 'additional_info_internet_health_bold';
    }
    var aboutCopy = (<span><FormattedHTMLMessage id={additionalInfoId}/></span>);

    this.setState({
      aboutCopy: aboutCopy
    });
  },
  renderTextAboutPage: function() {
    return (
      <div className="container additional-page">
        <img className="heart-image icon-baseline" height="100" width="107" src="/assets/images/heart.ce7d2d59c757e1598e244e546426577c.svg"/>
        <div>
          { this.state.aboutCopy }
        </div>
      </div>
    );
  },
  renderNav: function() {
    if (this.props.test === "nav") {
      return (
        <Nav zenMode={true} simpleBackground={true}/>
      );
    }
    return (null);
  },
  render: function() {
    var className = "row additional-info-container";

    var additionalInfo = this.renderTextAboutPage();

    return (
      <div>
        {this.renderNav()}
        <div className={className}>
          <div className="additional-info-page">
            { additionalInfo }
            <SingleForm
              subscribed={this.props.subscribed}
              currency={this.props.currency}
              presets={this.props.presets}
              amount={this.props.amount}
              frequency={this.props.frequency}
              country={this.props.country}
            />
          </div>
          <MozillaFooter/>
        </div>
      </div>
    );
  }
});
