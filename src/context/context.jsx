import { createContext, useState, useEffect } from "react";

export const Context = createContext({
  data: [],
  setData: () => null,
});

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const value = { data, setData };

  console.log("data", data);

  useEffect(() => {
    setData([
      {
        headline: "The Impact of Remote Work on Employee Productivity",
        accordId: 1,
        isEditable: true,
        isOpen: true,
        questions: [
          {
            id: 1,
            question:
              "Has remote work increased employee productivity in your industry?",
            answer: "no",
          },

          {
            id: 2,
            question:
              "Are there specific benefits of remote work that you have noticed improving your productivity?",
            answer: "no",
          },
          {
            id: 3,
            question:
              "Do you face challenges in maintaining productivity while working remotely?",
            answer: "no",
          },
          {
            id: 4,
            question:
              "Have remote work tools and technologies positively impacted your efficiency?",
            answer: "no",
          },
          {
            id: 5,
            question:
              "Can companies enhance productivity in a remote work environment with specific strategies?",
            answer: "no",
          },
        ],
      },

      {
        headline: "The Role of Artificial Intelligence in Modern Healthcare",
        accordId: 2,
        isEditable: false,
        isOpen: false,
        questions: [
          {
            id: 6,
            question:
              "Do you believe artificial intelligence (AI) can improve patient care in healthcare?",
            answer: "no",
          },

          {
            id: 7,
            question:
              "Are AI-based diagnostic tools more accurate than traditional methods?",
            answer: "no",
          },
          {
            id: 8,
            question:
              "Is there a risk of job displacement due to AI in the healthcare sector?",
            answer: "no",
          },
          {
            id: 9,
            question:
              "Can AI help in reducing healthcare costs for patients and providers?",
            answer: "no",
          },
          {
            id: 10,
            question:
              "Do you think AI can enhance the efficiency of hospital management systems?",
            answer: "no",
          },
        ],
      },
      {
        headline: "The Environmental Impact of Electric Vehicles",
        accordId: 3,
        isEditable: false,
        isOpen: false,
        questions: [
          {
            id: 11,
            question:
              "Are electric vehicles (EVs) significantly reducing carbon emissions compared to traditional vehicles?",
            answer: "no",
          },

          {
            id: 12,
            question:
              "Do you think the production of EV batteries has a negative environmental impact?",
            answer: "no",
          },
          {
            id: 13,
            question:
              "Are there enough charging stations available to support widespread EV adoption?",
            answer: "no",
          },
          {
            id: 14,
            question:
              "Do you believe government incentives are necessary to encourage the purchase of EVs?",
            answer: "no",
          },
          {
            id: 15,
            question:
              "Is the current infrastructure adequate to support a large-scale transition to electric vehicles?",
            answer: "no",
          },
        ],
      },

      {
        headline: "The Future of Online Education Post-Pandemic",
        accordId: 4,
        isEditable: false,
        isOpen: false,
        questions: [
          {
            id: 16,
            question:
              "Do you think online education will continue to be popular after the pandemic?",
            answer: "no",
          },

          {
            id: 17,
            question:
              "Has online education improved accessibility to learning for a wider audience?",
            answer: "no",
          },
          {
            id: 18,
            question:
              "Are students able to achieve the same level of understanding through online education as in traditional classrooms?",
            answer: "no",
          },
          {
            id: 19,
            question:
              "Do online education platforms provide sufficient support and resources for students?",
            answer: "no",
          },
          {
            id: 20,
            question:
              "Is the quality of online education content comparable to traditional educational materials?",
            answer: "no",
          },
        ],
      },
    ]);
  }, []);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
