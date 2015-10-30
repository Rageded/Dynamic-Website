#ifndef rqt_question__MyPlugin_H
#define rqt_question__MyPlugin_H

#include <rqt_gui_cpp/plugin.h>

#include <ui_question.h>
#include <QWidget>
#include <QLabel>
#include <QString>
namespace rqt_question{

class MyPlugin
  : public rqt_gui_cpp::Plugin
{
  Q_OBJECT
public:
  MyPlugin();
  QString op;
  QString op2;
  QString s;
  void Calculate();
  virtual void initPlugin(qt_gui_cpp::PluginContext& context);
  virtual void shutdownPlugin();
  virtual void saveSettings(qt_gui_cpp::Settings& plugin_settings, qt_gui_cpp::Settings& instance_settings) const;
  virtual void restoreSettings(const qt_gui_cpp::Settings& plugin_settings, const qt_gui_cpp::Settings& instance_settings);

  // Comment in to signal that the plugin has a way to configure it
  //bool hasConfiguration() const;
  //void triggerConfiguration();
private:
  Ui::widget ui_;
  QWidget* widget_;
  QLabel* label;

};
} // namespace
#endif // my_namespace__my_plugin_H
