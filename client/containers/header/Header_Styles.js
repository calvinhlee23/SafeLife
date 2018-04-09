import {StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
  Header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "40px",
    background: "#7F7F7F",
    padding: "0 20px",
  },
  LogoWrap: {
    fontSize: "16px",
    height: "19px",
    lineHeight: "19px",
    color: "#fff",
    width: "5%",
  },
  SearchWrap: {
    width: "75%",
  },
  ToolsWrap: {
    width: "10%",
  },
});

export default styles;
