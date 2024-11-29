import type { Schema, Struct } from '@strapi/strapi';

export interface CompanyInfoCompanyInfo extends Struct.ComponentSchema {
  collectionName: 'components_company_info_company_infos';
  info: {
    displayName: 'company-info';
  };
  attributes: {};
}

export interface FeaturesFeatures extends Struct.ComponentSchema {
  collectionName: 'components_features_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    feature1: Schema.Attribute.Text;
    feature2: Schema.Attribute.Text;
    feature3: Schema.Attribute.Text;
    feature4: Schema.Attribute.Text;
  };
}

export interface WarrantyQuestion extends Struct.ComponentSchema {
  collectionName: 'components_warranty_questions';
  info: {
    description: '';
    displayName: 'Question';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'company-info.company-info': CompanyInfoCompanyInfo;
      'features.features': FeaturesFeatures;
      'warranty.question': WarrantyQuestion;
    }
  }
}
