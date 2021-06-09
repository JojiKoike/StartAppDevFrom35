import React from "react";
import { PageProps } from "gatsby";
import { TextField, Button } from "@material-ui/core";

import { Layout } from "../components";

const ContactPage: React.FC<PageProps> = ({ location, ...props }) => (
  <Layout location={location}>
    <div className="container bg-white p-6 mb-2 max-w-6xl mx-auto rounded-md shadow-md">
      <h1 className="text-center text-lg sm:text-3xl">Contact</h1>
      <form
        action="/thanks"
        name="contact"
        method="POST"
        autoComplete="off"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <div className="container my-3 max-w-4xl mx-auto flex flex-col">
          <TextField
            className="mb-4"
            required
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            helperText="Emailアドレスを入力してください"
          />
          <TextField
            className="mb-4"
            id="name"
            name="name"
            fullWidth
            label="名前（任意）"
            variant="outlined"
            type="text"
            helperText="名前を入力してください（任意）"
          />
          <TextField
            className="mb-4"
            required
            id="title"
            name="title"
            fullWidth
            label="タイトル"
            variant="outlined"
            type="text"
            helperText="タイトルを入力してください"
          />
          <TextField
            className="mb-4"
            required
            id="content"
            name="content"
            label="お問い合わせ内容"
            type="text"
            rows={20}
            multiline
            variant="outlined"
            helperText="お問い合わせ内容を入力してください"
          />
          <div className="flex justify-center sm:justify-end">
            <Button
              href="/"
              className="bg-red-500 text-white m-2"
              variant="contained"
            >
              キャンセル
            </Button>
            <Button
              className="bg-blue-500 text-white m-2"
              variant="contained"
              type="submit"
            >
              送信
            </Button>
          </div>
        </div>
      </form>
    </div>
  </Layout>
);

export default ContactPage;
