/********************************************************************************
** Form generated from reading UI file 'mission.ui'
**
** Created by: Qt User Interface Compiler version 4.8.6
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MISSION_H
#define UI_MISSION_H

#include <QtCore/QVariant>
#include <QtGui/QAction>
#include <QtGui/QApplication>
#include <QtGui/QButtonGroup>
#include <QtGui/QHBoxLayout>
#include <QtGui/QHeaderView>
#include <QtGui/QLabel>
#include <QtGui/QLineEdit>
#include <QtGui/QProgressBar>
#include <QtGui/QPushButton>
#include <QtGui/QSpacerItem>
#include <QtGui/QVBoxLayout>
#include <QtGui/QWidget>

QT_BEGIN_NAMESPACE

class Ui_widget
{
public:
    QLabel *label;
    QLineEdit *uavNameEdit;
    QLabel *label_2;
    QProgressBar *missionProgressBar;
    QLabel *label_3;
    QLineEdit *missionName;
    QPushButton *changeMissionButton;
    QPushButton *stopMissionButton;
    QWidget *verticalWidget;
    QVBoxLayout *verticalLayout;
    QHBoxLayout *horizontalLayout;
    QVBoxLayout *verticalLayout_2;
    QSpacerItem *horizontalSpacer;
    QSpacerItem *verticalSpacer;

    void setupUi(QWidget *widget)
    {
        if (widget->objectName().isEmpty())
            widget->setObjectName(QString::fromUtf8("widget"));
        widget->setWindowModality(Qt::WindowModal);
        widget->resize(391, 207);
        widget->setMinimumSize(QSize(391, 207));
        label = new QLabel(widget);
        label->setObjectName(QString::fromUtf8("label"));
        label->setGeometry(QRect(10, 20, 51, 17));
        uavNameEdit = new QLineEdit(widget);
        uavNameEdit->setObjectName(QString::fromUtf8("uavNameEdit"));
        uavNameEdit->setGeometry(QRect(60, 10, 161, 27));
        label_2 = new QLabel(widget);
        label_2->setObjectName(QString::fromUtf8("label_2"));
        label_2->setGeometry(QRect(10, 60, 121, 17));
        missionProgressBar = new QProgressBar(widget);
        missionProgressBar->setObjectName(QString::fromUtf8("missionProgressBar"));
        missionProgressBar->setGeometry(QRect(10, 80, 371, 25));
        missionProgressBar->setValue(24);
        label_3 = new QLabel(widget);
        label_3->setObjectName(QString::fromUtf8("label_3"));
        label_3->setGeometry(QRect(10, 120, 61, 17));
        missionName = new QLineEdit(widget);
        missionName->setObjectName(QString::fromUtf8("missionName"));
        missionName->setGeometry(QRect(80, 110, 291, 27));
        changeMissionButton = new QPushButton(widget);
        changeMissionButton->setObjectName(QString::fromUtf8("changeMissionButton"));
        changeMissionButton->setGeometry(QRect(10, 160, 121, 27));
        stopMissionButton = new QPushButton(widget);
        stopMissionButton->setObjectName(QString::fromUtf8("stopMissionButton"));
        stopMissionButton->setGeometry(QRect(280, 160, 99, 27));
        verticalWidget = new QWidget(widget);
        verticalWidget->setObjectName(QString::fromUtf8("verticalWidget"));
        verticalWidget->setGeometry(QRect(-1, -1, 401, 201));
        verticalWidget->setMinimumSize(QSize(401, 201));
        verticalLayout = new QVBoxLayout(verticalWidget);
        verticalLayout->setObjectName(QString::fromUtf8("verticalLayout"));
        horizontalLayout = new QHBoxLayout();
        horizontalLayout->setObjectName(QString::fromUtf8("horizontalLayout"));
        verticalLayout_2 = new QVBoxLayout();
        verticalLayout_2->setObjectName(QString::fromUtf8("verticalLayout_2"));
        horizontalSpacer = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        verticalLayout_2->addItem(horizontalSpacer);

        verticalSpacer = new QSpacerItem(20, 40, QSizePolicy::Minimum, QSizePolicy::Expanding);

        verticalLayout_2->addItem(verticalSpacer);


        horizontalLayout->addLayout(verticalLayout_2);


        verticalLayout->addLayout(horizontalLayout);


        retranslateUi(widget);

        QMetaObject::connectSlotsByName(widget);
    } // setupUi

    void retranslateUi(QWidget *widget)
    {
        widget->setWindowTitle(QApplication::translate("widget", "Dialog", 0, QApplication::UnicodeUTF8));
        label->setText(QApplication::translate("widget", "Name:", 0, QApplication::UnicodeUTF8));
        label_2->setText(QApplication::translate("widget", "Mission Progress", 0, QApplication::UnicodeUTF8));
        label_3->setText(QApplication::translate("widget", "Mission:", 0, QApplication::UnicodeUTF8));
        changeMissionButton->setText(QApplication::translate("widget", "Change Mission", 0, QApplication::UnicodeUTF8));
        stopMissionButton->setText(QApplication::translate("widget", "Stop Mission", 0, QApplication::UnicodeUTF8));
    } // retranslateUi

};

namespace Ui {
    class widget: public Ui_widget {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MISSION_H