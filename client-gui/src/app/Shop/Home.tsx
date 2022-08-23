import { useTranslation } from "react-i18next";
import BaseHttpService from "../../shared/data/util/BaseHttpService";

export default function About() {

    const { t } = useTranslation();

    return (
        <div className="py-5 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-600">{t('page.home.welcome')}</h2>
        </div>
    );
}