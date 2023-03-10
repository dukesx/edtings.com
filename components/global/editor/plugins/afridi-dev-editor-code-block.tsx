/* eslint-disable react-hooks/exhaustive-deps */
/// <reference path="../../../../node_modules/highlight.js/types/index.d.ts" />
import {
  CopyButton,
  Divider,
  Group,
  Select,
  Tooltip,
  Textarea,
  ActionIcon,
  useMantineTheme,
  Text,
  Stack,
} from "@mantine/core";
import {
  mergeAttributes,
  Node,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import "highlight.js/styles/atom-one-dark.css";
//@ts-ignore
import Lowlight from "react-lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import lua from "highlight.js/lib/languages/lua";
import java from "highlight.js/lib/languages/java";
import css from "highlight.js/lib/languages/css";
import csharp from "highlight.js/lib/languages/csharp";
import less from "highlight.js/lib/languages/less";
import dart from "highlight.js/lib/languages/dart";
import xml from "highlight.js/lib/languages/xml";
import wasm from "highlight.js/lib/languages/wasm";
import swift from "highlight.js/lib/languages/swift";
import objectivec from "highlight.js/lib/languages/objectivec";
import ruby from "highlight.js/lib/languages/ruby";
import rust from "highlight.js/lib/languages/rust";
import python from "highlight.js/lib/languages/python";
import markdown from "highlight.js/lib/languages/markdown";
import shell from "highlight.js/lib/languages/shell";
import scss from "highlight.js/lib/languages/scss";
import json from "highlight.js/lib/languages/json";
import ini from "highlight.js/lib/languages/ini";
import go from "highlight.js/lib/languages/go";
import diff from "highlight.js/lib/languages/diff";
import cpp from "highlight.js/lib/languages/cpp";
import c from "highlight.js/lib/languages/c";
import bash from "highlight.js/lib/languages/bash";
import sql from "highlight.js/lib/languages/sql";
import php from "highlight.js/lib/languages/php";
import graphql from "highlight.js/lib/languages/graphql";
import kotlin from "highlight.js/lib/languages/kotlin";

import { useEffect, useRef, useState } from "react";
import { Check, Clipboard } from "@phosphor-icons/react";

// Then register them with lowlight
Lowlight.registerLanguage("javascript", javascript);
Lowlight.registerLanguage("shell", shell);
Lowlight.registerLanguage("lua", lua);
Lowlight.registerLanguage("bash", bash);
Lowlight.registerLanguage("c", c);
Lowlight.registerLanguage("csharp", csharp);
Lowlight.registerLanguage("cpp", cpp);
Lowlight.registerLanguage("markdown", markdown);
Lowlight.registerLanguage("ini", ini);
Lowlight.registerLanguage("json", json);
Lowlight.registerLanguage("css", css);
Lowlight.registerLanguage("diff", diff);
Lowlight.registerLanguage("go", go);
Lowlight.registerLanguage("scss", scss);
Lowlight.registerLanguage("wasm", wasm);
Lowlight.registerLanguage("ruby", ruby);
Lowlight.registerLanguage("python", python);
Lowlight.registerLanguage("rust", rust);
Lowlight.registerLanguage("xml", xml);
Lowlight.registerLanguage("dart", dart);
Lowlight.registerLanguage("rust", rust);
Lowlight.registerLanguage("objectivec", objectivec);
Lowlight.registerLanguage("swift", swift);
Lowlight.registerLanguage("less", less);
Lowlight.registerLanguage("typescript", typescript);
Lowlight.registerLanguage("java", java);
Lowlight.registerLanguage("sql", sql);
Lowlight.registerLanguage("php", php);
Lowlight.registerLanguage("graphql", graphql);
Lowlight.registerLanguage("kotlin", kotlin);

export default Node.create({
  name: "afridi-dev-editor-code-block",
  group: "block",
  addNodeView() {
    return ReactNodeViewRenderer(MantineCode);
  },

  parseHTML() {
    return [
      {
        tag: "afridi-dev-editor-code-block",
      },
    ];
  },

  addAttributes() {
    return {
      language: {
        default: "typescript",
      },
      code: {
        default: "",
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "afridi-dev-editor-code-block",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },
});

const MantineCode = (props: any) => {
  const [text, setText] = useState({ value: "", caret: -1, target: null });
  const [indent, setIndent] = useState(0);
  const theme = useMantineTheme();

  useEffect(() => {
    if (text.caret >= 0) {
      //@ts-ignore
      text.target!.setSelectionRange(text.caret + indent, text.caret + indent);
    }
  }, [text]);

  const handleTab = (e: any) => {
    let content = e.target.value;
    let caret = e.target.selectionStart;

    if (e.key === "Tab") {
      e.preventDefault();

      let newText =
        content.substring(0, caret) +
        " ".repeat(indent) +
        content.substring(caret);

      setText({ value: newText, caret: caret, target: e.target });
    }
  };

  const handleText = (e: any) => {
    setText({ value: e.target.value, caret: -1, target: e.target });
    props.updateAttributes({
      code: e.target.value,
    });
  };
  return (
    <NodeViewWrapper>
      <Group mt="xl" noWrap>
        <Stack>
          <Group position="apart">
            <Text weight={700} size="xl">
              Code Block
            </Text>
            <Select
              ml="auto"
              size="xs"
              value={indent + "-Tab"}
              placeholder="Indentation"
              data={["1-Tab", "2-Tab", "3-Tab", "4-Tab"]}
              onChange={(val) => setIndent(parseInt(val!.split("-")[0]))}
            />
          </Group>
          <Textarea
            defaultValue={props.node.attrs.code ?? ""}
            autosize
            styles={{
              input: {
                fontFamily: "Source Code Pro, mono",
              },
            }}
            onChange={handleText}
            onKeyDown={handleTab}
            value={text.value}
            minRows={1}
            placeholder="Your code"
          />
        </Stack>

        <Divider size="xl" orientation="vertical" />

        <Stack>
          <Group position="right" noWrap spacing="xl">
            <CopyButton value={props.node.attrs.code}>
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? "Copied Code" : "Copy Code"}
                  withArrow
                  position="right"
                >
                  <ActionIcon
                    radius="xl"
                    color={copied ? "teal" : "blue"}
                    onClick={copy}
                    size="lg"
                  >
                    {copied ? <Check size={22} /> : <Clipboard size={22} />}
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>

            <Select
              defaultValue={props.node.attrs.language}
              searchable
              placeholder="Language"
              size="xs"
              data={[
                { label: "C", value: "c" },
                { label: "BASH", value: "bash" },
                { label: "C++", value: "cpp" },
                { label: "C#", value: "cs" },
                { label: "CSS", value: "css" },
                { label: "Dart", value: "dart" },
                { label: "DIFF", value: "diff" },
                { label: "GOLANG", value: "go" },
                { label: "GraphQL", value: "graphql" },
                { label: "JAVA", value: "java" },
                { label: "Javascript", value: "javascript" },
                { label: "Kotlin", value: "kotlin" },
                { label: "JSON", value: "json" },
                { label: "LESS", value: "less" },
                { label: "LUA", value: "lua" },
                { label: "Markdown", value: "markdown" },
                { label: "Objective-C", value: "objectivec" },
                { label: "PHP", value: "php" },
                { label: "Python", value: "python" },
                { label: "Rust", value: "rust" },
                { label: "Ruby", value: "ruby" },
                { label: "SASS", value: "scss" },
                { label: "Shell", value: "shell" },
                { label: "Typescript", value: "typescript" },
                { label: "WASM", value: "wasm" },
                { label: "HTML/XML", value: "xml" },
              ]}
              onChange={(val) =>
                props.updateAttributes({
                  language: val,
                })
              }
            />
          </Group>

          <Lowlight
            language={props.node.attrs.language}
            value={props.node.attrs.code}
          ></Lowlight>
        </Stack>
      </Group>
    </NodeViewWrapper>
  );
};
