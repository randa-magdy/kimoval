import Uploader from '@/components/Common/Uploader';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Form/Input';
import Label from '@/components/UI/Form/Label';
import TextArea from '@/components/UI/Form/TextArea';
import FillRatingStars from '@/components/UI/Rating/FillRatingStars';
import Space from '@/components/UI/Space';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormData {}

const ReviewForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const formcontext = useForm<FormData>({ mode: 'onBlur' });
  const {
    // register,
    handleSubmit,
    // formState: { errors },
    // control,
    // reset,
  } = formcontext;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);
    console.log(data);

    // sendData(data)
    //   .then((response) => {
    //     setLoading(false);
    //     // setVisible(true);
    //     reset({
    //       Name: "",
    //       Email: "",
    //       Service: "",
    //       Body: "",
    //     });
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     // setVisible(true);
    //   });

    setTimeout(() => {
      //   setVisible(false);
    }, 7000);
  };

  return (
    <div className="add-new-review-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Space direction="vertical" size="large">
          <div>
            <Label>How do you rate the product?</Label>
            <FillRatingStars />
          </div>
          <div>
            <Label>Write a review for the product</Label>
            <Space direction="vertical">
              <Input
                name="title"
                dimension="small"
                placeholder="What do you want to highlight?"
              />
              <TextArea
                name="review"
                placeholder="What did you like or dislike? How did you use the product? What others should know?"
              />
            </Space>
          </div>
          <div>
            <Label>Upload Image</Label>
            <Uploader />
            <ul className="text-light-gray text-less-medium list-disc px-5 py-3">
              <li>Upload up to 5 photos</li>
              <li>Maximum file size is 5MB</li>
              <li>Only the following formats are accepted : JPG, JPEF, PNG</li>
            </ul>
          </div>
        </Space>
        <div>
          <Button color="primary" size="small" loading={loading} block>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
