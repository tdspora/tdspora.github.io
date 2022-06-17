import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout title="Demo" description="Request a Demo page">
      <main>
        <div
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   height: "50vh",
        //   fontSize: "20px",
        // }}
        >
          <h1>Request a Demo page</h1>
          <p>React page</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            accusantium consequuntur cupiditate debitis deleniti error eum
            excepturi illo labore maiores, numquam perferendis provident quidem
            reiciendis reprehenderit saepe sed soluta voluptas.
          </p>
        </div>
      </main>
    </Layout>
  );
}
