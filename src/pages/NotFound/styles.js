const styles = theme => ({
  notFound: {
    display: "flex",
    height: "100%",
    "@media (max-width: 900px)": {
      flexDirection: "column"
    }
  },
  leftSection: {
    width: "50%",
    textAlign: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 900px)": {
      width: "100%",
      flexGrow: 1
    }
  },
  display: {
    lineHeight: "1em",
    marginBottom: theme.spacing.unit * 4,
    fontFamily: "'Oswald'",
    fontSize: "3.4rem"
  },
  text: {
    maxWidth: 420
  },
  rightSection: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    "@media (max-width: 900px)": {
      width: "100%",
      flexGrow: 0
    }
  },
  notFoundGif: {
    width: 360,
    "@media (max-width: 900px)": {
      width: 260
    }
  }
})

export default styles
