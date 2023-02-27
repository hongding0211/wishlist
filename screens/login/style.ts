import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  img: {
    width: 240,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#4037FE',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,

    text: {
      color: '#fff',
    },
  },
})
