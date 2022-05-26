import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  textContainer: {
    flex: 0.2, // adjust all flex when needed default: 0.2
  },
  image: {
    flex: 0.6, // adjust all flex when needed default: 0.6
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#00BFA6', // Change Color for Title
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    fontSize: 16,
    color: 'black', // Change Color for Description
    textAlign: 'center',
    paddingHorizontal: 64,
  },
  touchableOpacityContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 150,
  },
  touchableOpacity: {
    position: 'absolute',
    backgroundColor: '#00BFA6', // Change Color for Button
    borderColor: 'white', // Change Color for Button Border
    borderRadius: 100,
    borderWidth: 2,
    paddingVertical: 28,
    paddingHorizontal: 115,
  },
  touchableOpacityText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '800',
    color: 'white',
  },
  paginationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 64, // default 64
  },
  paginationDot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00BFA6', // Change Color for bottom Indicators
    marginHorizontal: 8,
    width: 10,
  },
  nextButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 225, // default 225
  },
  nextButton: {
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: '#00BFA6',
    padding: 28,
  },
});

export default styles;
