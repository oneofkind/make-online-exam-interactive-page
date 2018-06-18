class UmlExam {
  constructor() {
    this.form = document.querySelector("#uml-form");
    this.radio_1 = document.getElementById("radio-1");
    this.radio_2 = document.getElementById("radio-2");
    this.input1_1 = document.querySelector('[name="1-1"]');
    this.checkbox_1 = document.getElementById("checkbox-1");
    this.checkbox_2 = document.getElementById("checkbox-2");
    this.checkbox_1.value = [];
    this.checkbox_2.value = [];
    this.judgement_1 = document.getElementById("judgement-1");
    this.judgement_2 = document.getElementById("judgement-2");
    this.statement_1 = document.getElementById("statement-1");
    this.scoreContainer = document.getElementById("score")
    this.initFlag = false;
    this.init();
  }

  init() {
    this.initFlag = true;
    this.detectSubmit();
    this.detectClick();
  }

  detectSubmit() {
    // let subBtn = this.form.querySelector('[type = submit]')
    this.form.addEventListener("submit", e => {
      e.preventDefault();
      this.countScore();
      console.log(100);
    });
  }

  detectClick() {
    this.input1_1.addEventListener("change", e => {
      let target = e.target;
      let value = target.value;
      this.input1_1.value = value;
      console.log(this.input1_1.value);
    });

    this.radio_1.addEventListener("click", e => {
      let target = e.target;
      if (target.nodeName == "INPUT") {
        this.radio_1.value = target.dataset.value;
        console.log(this.radio_1.value);
      }
    });

    this.radio_2.addEventListener("click", e => {
      let target = e.target;
      if (target.nodeName == "INPUT") {
        this.radio_2.value = target.dataset.value;
        console.log(this.radio_2.value);
      }
    });

    this.checkbox_1.addEventListener("click", e => {
      let target = e.target;
      if (target.nodeName == "INPUT") {
        let value = target.dataset.value;
        // console.log(target.checked);
        if (target.checked) {
          this.checkbox_1.value.push(value);
        } else {
          let index = this.checkbox_1.value.indexOf(value);
          this.checkbox_1.value.splice(index, 1);
        }
        console.log(this.checkbox_1.value);
      }
    });

    this.checkbox_2.addEventListener("click", e => {
      let target = e.target;
      if (target.nodeName == "INPUT") {
        let value = target.dataset.value;
        // console.log(target.checked);
        if (target.checked) {
          this.checkbox_2.value.push(value);
        } else {
          let index = this.checkbox_2.value.indexOf(value);
          this.checkbox_2.value.splice(index, 1);
        }
        console.log(this.checkbox_2.value);
      }
    });

    this.judgement_1.addEventListener("click", e => {
      let target = e.target;
      if (target.nodeName == "INPUT") {
        this.judgement_1.value = target.dataset.value;
      }
      console.log(this.judgement_1.value);
    });

    this.judgement_2.addEventListener("click", e => {
      let target = e.target;
      if (target.nodeName == "INPUT") {
        this.judgement_2.value = target.dataset.value;
      }
      console.log(this.judgement_2.value);
    });

    this.statement_1.addEventListener("change", e => {
      let target = e.target;
      // console.log(target.value);
      this.statement_1.value = target.value;
    });
  }

  countScore() {
    this.score = 0;
    let checkbox_1_answer = ['A', 'B', 'D']
    let checkbox_2_answer = ['A', 'B', 'C']
    if (this.radio_1.value == "UML参加到软件开发工程中的几个阶段") {
      this.score += 10;
    }
    if (this.radio_2.value == "单继承") {
      this.score += 10;
    }
    if (this.judgement_1.value == "false") {
      this.score += 10;
    }
    if (this.judgement_2.value == "true") {
      this.score += 10;
    }
    if (
      this.statement_1.value ==
      "模型是对世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以使某种图形；或者是一种数学表达式。"
    ) {
      this.score += 10
    }


    if (this.checkbox_1.value.sort().toString() == checkbox_1_answer.toString()) {
      this.score += 10
    }
    if (this.checkbox_2.value.sort().toString() == checkbox_2_answer.toString()) {
      this.score += 10
    }

    /*     let a = [1, 2, 3, 4].reduce((accumulator, currentValue) => {
          if (currentValue == 3) {
            accumulator = true
          }
          return accumulator;
        }, false)
     */


    // console.log(checkbox_1_flag);
    // this.checkbox_1.value.forEach(element => {});
    // console.log(this.checkbox_1.value);

    // console.log(this.checkbox_2.value);


    console.log(this.score);
    this.scoreContainer.innerText = this.score
    return this.score;
  }
}