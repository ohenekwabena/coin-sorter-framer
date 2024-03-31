import React from "react";
import range from "lodash.range";
import { LayoutGroup, motion } from "framer-motion";

import styles from "./CoinSorter.module.css";

const NUM_OF_BOXES = 4;

function CoinSorter({ numOfCoins }) {
  const [selectedBox, setSelectedBox] = React.useState(0);

  return (
    <LayoutGroup>
      <div className={styles.wrapper}>
        {range(NUM_OF_BOXES).map((boxIndex) => (
          <button
            key={boxIndex}
            className={`${styles.box} ${selectedBox === boxIndex ? styles.selected : ""}`}
            onClick={() => setSelectedBox(boxIndex)}
          >
            {selectedBox === boxIndex &&
              range(numOfCoins).map((coinIndex) => {
                return (
                  <motion.div
                    layoutId={`coin-${coinIndex}`}
                    key={`coin-${coinIndex}`}
                    className={styles.coin}
                    transition={{ type: "spring", stiffness: 177, damping: 30 + coinIndex * 5 }}
                  />
                );
              })}
          </button>
        ))}
      </div>
    </LayoutGroup>
  );
}

export default CoinSorter;
