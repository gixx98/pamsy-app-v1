import { StyleSheet } from "react-native";
import colors from "./colors"

export default StyleSheet.create({
  input: {
    width: "100%",
    height: 44,
    borderColor: colors.light.border,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 4,
    paddingLeft: 12,
    borderRadius: 12,
    backgroundColor: '#FAFAFA'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop:100,
    padding: 20,
    backgroundColor: '#fff',
    height: '100%'
  },
  body: {
    fontFamily: 'inter-regular',
    fontSize: 14,
    color: colors.light.text
  }
});
