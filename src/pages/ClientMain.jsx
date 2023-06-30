import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/style.css";
import { Fragment } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

function Main(props) {
  const products = [
    {
      name: "Analytics",
      description: "Get a better understanding of your traffic",
      href: "#",
      icon: ChartPieIcon,
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers",
      href: "#",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Security",
      description: "Your customers’ data will be safe and secure",
      href: "#",
      icon: FingerPrintIcon,
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools",
      href: "#",
      icon: SquaresPlusIcon,
    },
    {
      name: "Automations",
      description: "Build strategic funnels that will convert",
      href: "#",
      icon: ArrowPathIcon,
    },
  ];
  const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const people = [
    {
      name: "회사 이름1",
      email: "회사 설명이다 회사 설명이다",
      role: "컴포넌트1",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "회사 이름2",
      email: "회사 설명이다",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "회사 이름3",
      email: "회사 설명이다",
      role: "Business Relations",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
    },
    {
      name: "회사 이름4",
      email: "회사 설명",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="main">
      {/* 전체 Frame */}
      <div class="main-css01" style={{ width: "380px", backgroudColor: "red" }}>
        <div class="main-css02">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
            aria-label="Global"
            style={{
              backgroundColor: "#B3B3B3",
              backdropFilter: "blur(10px)",
              width: "100%",
              transform: "none",
              transformOrigin: "50% 50% 0px",
              opacity: "1",
              display: "flex",
              height: "50px",
            }}
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
            <div className="flex ">
              <button
                type="button"
                className=" inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                style={{ margin: "-15.5rem" }} 
              >
                <span>이건 버튼일까?</span>
              </button>
            </div>
            {/* <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  Product
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Features
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </a>
            </Popover.Group> */}
            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </nav>
          {/* <nav
            class="framer-16wpwxw"
            style={{
              backgroundColor: "#B3B3B3",
              backdropFilter: "blur(10px)",
              width: "100%",
              transform: "none",
              transformOrigin: "50% 50% 0px",
              opacity: "1",
              display: "flex",
            }}
          >
            <a
              class="framer-1rzrhxl framer-142n3id"
              data-framer-name="kakaq_logo"
              href="./"
              data-framer-page-link-current="true"
              data-projection-id="513"
              style={{
                transform: "none",
                transformOrigin: "50% 50% 0px",
                opacity: 1,
              }}
            >
              <div
                data-framer-background-image-wrapper="true"
                data-projection-id="514"
                style={{
                  position: "absolute",
                  pointerEvents: "none",
                  userSelect: "none",
                  borderRadius: "inherit",
                  inset: 0,
                }}
              >
                <div
                  style={{
                    display: "contents",
                    borderRadius: "inherit",
                    pointerEvents: "none",
                  }}
                >
                  <img
                    src="#"
                    alt="logo"
                    sizes="82px"
                    style={{ height: "36px", padding: "15px" }}
                  />
                </div>
              </div>
            </a>
            <div
              class="framer-1bmyg1j"
              data-projection-id="515"
              style={{
                transform: "none",
                transformOrigin: "50% 50% 0px",
                opacity: 1,
              }}
            >
              <div
                class="framer-15lrvy6"
                data-framer-name="Links"
                data-projection-id="2690"
                style={{ opacity: "1" }}
              >
                <div
                  class="framer-1xlz8p9"
                  data-projection-id="2691"
                  style={{ opacity: "1" }}
                >
                  <a
                    class="framer-oy7oxm framer-142n3id"
                    href="#"
                    target="_blank"
                    rel="noopener"
                    data-projection-id="2695"
                    style={{ opacity: "1" }}
                  >
                    <div class="framer-dg4wwn">
                      <img
                        src="#"
                        alt="ICON"
                        sizes="82px"
                        style={{ height: "36px", padding: "15px" }}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </nav> */}
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
            aria-label="Global"
            style={{
              backgroundColor: "#D9D9D9",
              backdropFilter: "blur(10px)",
              width: "100%",
              transform: "none",
              transformOrigin: "50% 50% 0px",
              opacity: "1",
              display: "flex",
              borderRadius: "0px 0px 10px 10px",
              height: "50px",
              justifyContent: "center",
            }}
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                {/* 로고 */}
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                /> */}
              </a>
            </div>
            {/* <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div> */}
            <Popover.Group className=" flex gap-x-12">
              {/* <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  Product
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover> */}
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                회사 카테고리 1
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                회사 카테고리 2
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                회사 카테고리 3
              </a>
            </Popover.Group>
            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </nav>

          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Product
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...products, ...callsToAction].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
          <span className="pt-2 pl-4" style={{alignSelf: "start"}}>
            <p className="py-2 text-xl font-semibold leading-6 text-gray-900">
            회사 카테고리
          </p>
          </span>
          <ul
            role="list"
            className="divide-y divide-gray-100"
            style={{ paddingLeft: "3px", paddingRight: "3px" }}
          >
            {people.map((person) => (
              <li
                key={person.email}
                className="flex justify-between gap-x-12 py-5"
                style={{ textAlign: "start" }}
              >
                <div className="flex gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {person.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.email}
                    </p>
                  </div>
                </div>
                <div className="hidden gap-x-2 sm:flex sm:flex sm:items-end">
                  <div
                    className="bg-black rounded-md"
                    style={{ width: "50px", height: "50px" }}
                  >
                    fnff
                  </div>
                  <div
                    className="bg-black rounded-md"
                    style={{ width: "50px", height: "50px" }}
                  >
                    fnff
                  </div>
                  {/* <p className="text-sm leading-6 text-gray-900">
                    {person.role}
                  </p>
                  {person.lastSeen ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Last seen{" "}
                      <time dateTime={person.lastSeenDateTime}>
                        {person.lastSeen}
                      </time>
                    </p>
                  ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                  )} */}
                </div>
              </li>
            ))}
          </ul>
          <span className="pt-2 pl-4" style={{alignSelf: "start"}}>
            <p className="py-2 text-xl font-semibold leading-6 text-gray-900">
            회사 카테고리
          </p>
          </span>
          <ul
            role="list"
            className="divide-y divide-gray-100"
            style={{ paddingLeft: "3px", paddingRight: "3px" }}
          >
            {people.map((person) => (
              <li
                key={person.email}
                className="flex justify-between gap-x-12 py-4"
                style={{ textAlign: "start" }}
              >
                <div className="flex gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {person.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.email}
                    </p>
                  </div>
                </div>
                <div className="hidden gap-x-2 sm:flex sm:flex sm:items-end">
                  <div
                    className="bg-black rounded-md"
                    style={{ width: "50px", height: "50px" }}
                  >
                    fnff
                  </div>
                  <div
                    className="bg-black rounded-md"
                    style={{ width: "50px", height: "50px" }}
                  >
                    fnff
                  </div>
                  {/* <p className="text-sm leading-6 text-gray-900">
                    {person.role}
                  </p>
                  {person.lastSeen ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Last seen{" "}
                      <time dateTime={person.lastSeenDateTime}>
                        {person.lastSeen}
                      </time>
                    </p>
                  ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                  )} */}
                </div>
              </li>
            ))}
          </ul>
          {/* <div
            className="framer-1qelean"
            data-framer-appear-id="m2ii2j"
            data-projection-id="521"
            style={{
              opacity: 1,
              transform: "perspective(1200px)",
            }}
          >
            <div
              class="framer-xlkaf5"
              data-framer-component-type="RichTextContainer"
              data-projection-id="523"
              style={{
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                flexShrink: 0,
                transform: "none",
              }}
            >
              <h2 data-aos="fade-up" className="framer-text">
                ㅠㅠㅠㅠ
                <br class="framer-text" />
                annpqnpqnpasdfasf
              </h2>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
