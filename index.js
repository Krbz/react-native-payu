import { requireNativeComponent } from 'react-native';

var PayUWidget = requireNativeComponent('PaymentChooserWidget');
var PayUWidgetCmp = function(props) {
    return (
      <PayUWidget {...props} ref={props.refObject} style={{ minHeight: 50 }} />
    );
};

module.exports = PayUWidgetCmp;
