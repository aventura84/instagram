import { getCLS, getFCP } from "web-vitals";

const reportWebVitals = (OnPerfEntry) => {
  if (OnPerfEntry && OnPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCls, getFID, getLCP, getTTFB }) => {
      getCLS(OnPerfEntry);
      getFID(OnPerfEntry);
      getFCP(OnPerfEntry);
      getLCP(OnPerfEntry);
      getTTFB(OnPerfEntry);
    });
  }
};
export default reportWebVitals;
