"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Card, { Badge } from "@/components/Cards/Card";
import Button from "@/components/Button/Button";
import Form, { Field } from "@/components/Form/Form";
import ReadingIcon from "@/components/Icons/ReadingIcon";
import {
  AuthContext,
  GoogleSignIn,
  LoginStatus,
  signOut,
} from "@/lib/auth/firebase";
import { useContext, useEffect, useRef } from "react";
import Meter from "@/components/Meter/Meter";
import ThunderIcon from "@/components/Icons/ThunderIcon";
import StarIcon from "@/components/Icons/StarIcon";

export default function Home() {
  const { setAuthService, AuthService } = useContext(AuthContext);
  const FirstSplashRef = useRef(true);

  useEffect(() => {
    FirstSplashRef.current = false;
  }, []);
  return (
    <main className={styles.main}>
      <Main />
      <Login />
    </main>
  );
}

function Main() {
  const { setAuthService, AuthService } = useContext(AuthContext);

  return (
    <div
      id="main-page"
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100svh",
        width: "100vw",
        boxShadow: "0px 0px 40px rgba(0,0,0,0.8)",
        transform: "translateX(0%)",
        transition: "transform 1s var(--cubic-bezier)",
        zIndex: "1",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          height: "35vh",
          width: "100%",
          backgroundColor: "var(--deep-purple)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "1rem",
          gap: "0rem",
        }}
      >
        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
          <p
            style={{ color: "white", fontWeight: "600", cursor: "pointer" }}
            onClick={() => {
              if (AuthService) signOut(AuthService.auth);
            }}
          >
            Logout
          </p>
        </div>
        <div
          style={{
            display: "flex",
            height: "20%",
            width: "100%",
            alignItems: "center",
          }}
        >
          <ThunderIcon
            height="100%"
            colors={{ main: "var(--thunder-yellow)" }}
            style={{
              marginRight: "0.5rem",
            }}
          />
          <div style={{ height: "100%", width: "100%" }}>
            <p
              style={{
                paddingLeft: "0.5rem",
                color: "white",
                fontWeight: "800",
                marginBottom: "0rem",
              }}
            >
              Daily Goals
            </p>
            <Meter
              height="35%"
              width="100%"
              colors={{
                foreground: "var(--thunder-yellow)",
              }}
              value={50}
              max={100}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "20%",
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <StarIcon
            height="70%"
            colors={{ main: "var(--go-green)" }}
            style={{ marginRight: "0.2rem" }}
          />
          <div style={{ height: "100%", width: "100%" }}>
            <p
              style={{
                paddingLeft: "0.5rem",
                color: "white",
                fontWeight: "800",
              }}
            >
              Weekly Goals
            </p>
            <Meter
              height="35%"
              width="100%"
              colors={{
                foreground: "var(--go-green)",
              }}
              value={50}
              max={100}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "80%",
            marginTop: "1rem",
            padding: "0.5rem",
            justifyContent: "space-evenly",
          }}
        >
          <Badge colors={{ border: "transparent" }} style={{ padding: "0" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "var(--cloud-gray)",
                  fontWeight: "800",
                  fontSize: "120%",
                }}
              >
                2
              </p>
              <p style={{ color: "var(--cloud-gray)" }}>Books</p>
            </div>
          </Badge>
          <Badge colors={{ border: "transparent" }} style={{ padding: "0" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "var(--cloud-gray)",
                  fontWeight: "800",
                  fontSize: "120%",
                }}
              >
                35
              </p>
              <p style={{ color: "var(--cloud-gray)" }}>Notes</p>
            </div>
          </Badge>
          <Badge colors={{ border: "transparent" }} style={{ padding: "0" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "var(--cloud-gray)",
                  fontWeight: "800",
                  fontSize: "120%",
                }}
              >
                134
              </p>
              <p style={{ color: "var(--cloud-gray)" }}>Minutes</p>
            </div>
          </Badge>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          height: "100%",
          paddingTop: "0.5rem",
          paddingBottom: "0rem",
          gap: "0.5rem",
          width: "100%",
        }}
      >
        <Card
          color="var(--cloud-gray)"
          style={{
            width: "100%",
            padding: "0rem",
            borderRadius: "0px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              height: "12rem",
              padding: "0.5rem",
              backgroundColor: "var(--cloud-gray)",
            }}
          >
            <div style={{ height: "100%", width: "30%" }}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src="https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "70%",
                padding: "0.5rem",

                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={{
                    width: "100%",
                    fontWeight: "800",
                    fontSize: "1.1rem",
                    color: "rgba(60,60,60)",
                    textAlign: "center",
                  }}
                >
                  Atomic Habits
                </p>
                <p
                  style={{
                    width: "100%",
                    fontWeight: "800",
                    fontSize: "0.9rem",
                    color: "rgba(100,100,100)",
                    textAlign: "center",
                  }}
                >{`James Clear`}</p>
              </div>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  position: "relative",
                  justifyContent: "space-evenly",
                }}
              >
                <Meter
                  max={100}
                  value={20}
                  height="6%"
                  width="90%"
                  colors={{
                    foreground: "var(--deep-purple)",
                    background: "rgb(180,180,180)",
                  }}
                  style={{
                    boxShadow: "0px 0px 3px rgba(0,0,0,0.2) inset",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    width: "100%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Badge
                    colors={{ border: "rgba(100,100,100)" }}
                    style={{ border: "none", padding: "0" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          color: "rgba(100,100,100)",
                          fontWeight: "800",
                          fontSize: "80%",
                        }}
                      >
                        5
                      </p>
                      <p
                        style={{
                          color: "rgba(100,100,100)",
                          fontSize: "70%",
                        }}
                      >
                        Annotations
                      </p>
                    </div>
                  </Badge>{" "}
                  <Badge
                    colors={{ border: "rgba(100,100,100)" }}
                    style={{ border: "none", padding: "0" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          color: "rgba(100,100,100)",
                          fontWeight: "800",
                          fontSize: "80%",
                        }}
                      >
                        6
                      </p>
                      <p
                        style={{
                          color: "rgba(100,100,100)",
                          fontSize: "70%",
                        }}
                      >
                        Reflections
                      </p>
                    </div>
                  </Badge>
                  <Badge
                    colors={{ border: "rgba(100,100,100)" }}
                    style={{ border: "none", padding: "0" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          color: "rgba(100,100,100)",
                          fontWeight: "800",
                          fontSize: "80%",
                        }}
                      >
                        94
                      </p>
                      <p
                        style={{
                          color: "rgba(100,100,100)",
                          fontSize: "70%",
                        }}
                      >
                        Minutes
                      </p>
                    </div>
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div
      id="login-page"
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2rem",
        height: "100svh",
        width: "100vw",
        boxShadow: "0px 0px 40px rgba(0,0,0,0.8)",
        transform: `translateX(${LoginStatus.get() ? "-100" : "0"}%)`,
        transition: "transform 1s var(--cubic-bezier)",
        backgroundColor: "white",
        zIndex: "2",
      }}
    >
      <div style={{ width: "100%", padding: "0rem 1rem" }}>
        <h1
          style={{
            width: "100%",
            textAlign: "center",
            margin: "0",
            marginTop: "1rem",
            fontSize: "3rem",
            fontWeight: "400",
          }}
        >
          BookWurm
        </h1>

        <ReadingIcon
          colors={{ main: "var(--deep-purple)" }}
          width="100%"
          style={{ marginBottom: "4rem" }}
        />
      </div>
      <GoogleSignIn height="10%" width="auto" />
      <p
        style={{
          color: "var(--obsidian)",
          opacity: "0.6",
          position: "fixed",
          bottom: "2rem",
        }}
      >
        Made by Konstantin Victoria
      </p>
    </div>
  );
}

function ManualLogin() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 0,
      }}
    >
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          margin: "0",
          marginTop: "1rem",
          fontSize: "3rem",
          fontWeight: "400",
        }}
      >
        BookWurm
      </h1>
      <ReadingIcon colors={{ main: "var(--deep-purple)" }} height="17rem" />

      <Form color="transparent">
        <a
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            color: "var(--deep-purple)",
            cursor: "pointer",
            marginBottom: "1rem",
            textDecoration: "underline",
          }}
        >
          Sign up
        </a>
        <Field
          unique_id="username"
          label="Username"
          color={{
            input: {
              text: "var(--obsidian)",
              background: "var(--cloud-gray)",
            },
            label: "black",
          }}
        />
        <Field
          unique_id="password"
          label="Password"
          color={{
            input: {
              text: "var(--obsidian)",
              background: "var(--cloud-gray)",
            },
            label: "black",
          }}
          type="password"
        />
        <Button color="var(--deep-purple)" style={{ marginTop: "1rem" }}>
          Login
        </Button>
      </Form>
    </div>
  );
}
