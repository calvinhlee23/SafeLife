import {StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
  NewButton: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "69px",
    height: "25px",
    borderRadius: "2px",
    backgroundColor: "#0190D5",
    cursor: "pointer",
    marginBottom: "10px",
  },
  NewLabel: {
    color: "#fff",
    fontSize: "13px",
    paddingRight: "15px",
  },
  ArrowDown: {
    position: "absolute",
    right: "9px",
    borderTop: "4px solid #fff",
    borderLeft: "4px solid transparent",
    borderRight: "4px solid transparent",
  }
});

export default styles;
