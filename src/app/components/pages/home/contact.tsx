"use client";
import { useState } from "react";
import FormSelect from "../../form/formSelect";
import FormInput from "../../form/formInput";
import FormTextArea from "../../form/formTextArea";

const contactMethodOptions = [
  { value: "email", label: "メール" },
  { value: "phone", label: "電話" },
];

const contactTimeOptions = [
  { value: "10:00", label: "10:00" },
  { value: "11:00", label: "11:00" },
  { value: "12:00", label: "12:00" },
  { value: "13:00", label: "13:00" },
  { value: "14:00", label: "14:00" },
  { value: "15:00", label: "15:00" },
  { value: "16:00", label: "16:00" },
  { value: "17:00", label: "17:00" },
  { value: "18:00", label: "18:00" },
  { value: "19:00", label: "19:00" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    nameStore: "",
    name: "",
    phone: "",
    email: "",
    prefectures: "",
    address: "",
    contactMethod: "",
    contactTime: "",
    content: "",
  });
  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div id="contact" className="relative px-5 pt-[82px] md:pt-[70px] bg-[#F4F4F4]">
      <div className="w-full max-w-[1200px] mx-auto">
        <h5 className="text-center md:text-[50px] text-[32px] font-bold">
          お問い合わせ
        </h5>
        <p className="text-center md:text-[24px] text-[18px] font-medium mt-10">
          当社へのお問い合わせはこちらからお願い致します。
          <br />
          下記に必要事項をご記入の上、お問い合わせください。
        </p>
        <div className="bg-white border border-[#E1E1DC] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] mt-5 px-5 py-7 md:px-[75px] md:py-[70px] rounded-[20px] md:space-y-11 space-y-6">
          <div>
            <FormInput
              type="text"
              label="店舗名"
              name="nameStore"
              value={formData.nameStore}
              placeholder="メンエスバズーカ"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex md:gap-[46px] max-md:flex-col gap-6">
            <div className="md:w-1/2">
              <FormInput
                type="text"
                label="担当者名"
                name="name"
                value={formData.name}
                placeholder="例）山田太郎"
                onChange={handleInputChange}
              />
            </div>
            <div className="md:w-1/2">
              <FormInput
                type="text"
                label="電話番号"
                name="phone"
                value={formData.phone}
                placeholder="0433126905"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex md:gap-[46px] max-md:flex-col gap-6">
            <div className="md:w-1/2">
              <FormInput
                type="email"
                label="メールアドレス"
                name="email"
                value={formData.email}
                placeholder="info@esthe-bazooka.com"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex md:gap-[46px] max-md:flex-col gap-6">
            <div className="md:w-[250px]">
              <FormInput
                type="text"
                label="都道府県"
                name="prefectures"
                value={formData.prefectures}
                placeholder="東京都"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-1">
              <FormInput
                type="text"
                label="住所"
                name="address"
                value={formData.address}
                placeholder="住所を入力してください"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex md:gap-[46px] max-md:flex-col gap-6">
            <div className="md:w-[304px]">
              <FormSelect
                label="連絡方法（メールor電話）"
                name="contactMethod"
                options={contactMethodOptions}
                selectedValue={formData.contactMethod}
                onChange={handleSelectChange}
              />
            </div>
            <div className="md:w-[304px]">
              <FormSelect
                label="希望連絡時間"
                name="contactTime"
                options={contactTimeOptions}
                selectedValue={formData.contactTime}
                onChange={handleSelectChange}
              />
            </div>
          </div>
          <div className="">
            <FormTextArea
              label="お問い合わせ内容"
              name="content"
              value={formData.content}
              placeholder="例:導入に向けた資料を希望します。"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-center py-8 md:py-[50px]">
          <button type="button" className="md:text-[36px] text-[20px] font-bold w-[240px] h-[64px] md:w-[594px] md:h-[100px] flex items-center justify-center rounded-[20px] text-white bg-[#112E77] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">送信する</button>
        </div>
      </div>
    </div>
  );
}
