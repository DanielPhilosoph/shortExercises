function setColor(time, color, callback, reject) {
  setTimeout(() => {
    let ran = Math.floor(Math.random() * 10);
    if (ran > 5) {
      // callback
      document.querySelector('body').style.backgroundColor = color;
      callback();
    } else {
      // reject
      reject();
    }
  }, time);
}

setColor(
  1000,
  'red',
  () => {
    setColor(
      1000,
      'green',
      () => {
        setColor(
          1000,
          'purple',
          () => {
            setColor(
              1000,
              'black',
              () => {
                setColor(
                  1000,
                  'white',
                  () => {
                    setColor(
                      1000,
                      'gray',
                      () => {
                        setColor(
                          1000,
                          'pink',
                          () => {},
                          () => {
                            console.log('your request was rejected (PINK)');
                          }
                        );
                      },
                      () => {
                        console.log('your request was rejected (GRAY)');
                      }
                    );
                  },
                  () => {
                    console.log('your request was rejected (WHITE)');
                  }
                );
              },
              () => {
                console.log('your request was rejected (BLACK)');
              }
            );
          },
          () => {
            console.log('your request was rejected (PURPLE)');
          }
        );
      },
      () => {
        console.log('your request was rejected (GREEN)');
      }
    );
  },
  () => {
    console.log('your request was rejected (RED)');
  }
);
