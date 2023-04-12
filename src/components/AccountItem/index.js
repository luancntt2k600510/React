import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "~/components/Images";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <Image
                className={cx("avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_300x300.webp?x-expires=1681146000&x-signature=UgRCWyEcmAaNXGetNmXbnrgwSfs%3D"
                alt="Hoaa"
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyen Duc Luan</span>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx("username")}>nguyenducluan</span>
            </div>
        </div>
    );
}

export default AccountItem;
